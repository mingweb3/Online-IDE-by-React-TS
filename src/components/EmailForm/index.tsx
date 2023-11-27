import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import { EMAIL_REGEX } from "@/constants/regex";

type EmailForm = {
  email: string;
};

const EmailForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailForm>();
  const onSubmit: SubmitHandler<EmailForm> = (data) => console.log(data);

  return (
    <div>
      <div className="w-[480px] h-[70px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-2">
            <div className="w-[360px]">
              <Input
                {...register("email", { pattern: EMAIL_REGEX, required: true })}
                variant="standard"
                label="Your email"
                color="indigo"
                crossOrigin={undefined}
                width={380}
              />
            </div>
            <div className="grow">
              <Button
                type="submit" color="blue" fullWidth>
                SUBMIT
              </Button>
            </div>
          </div>
          {errors.email && (
            <span className="text-red text-sm">
              Please enter your valid email!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
