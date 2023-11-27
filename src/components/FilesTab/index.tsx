import styled from "styled-components"
import FileTabItem from "../FileTabItem/FileTabItem"

const TabWrapper = styled.div`
    max-width: calc(100vw - 240px);
    overflow: hidden;
    overflow-x: auto;
`

const FilesTab = () => {
    return (
        <section className=" bg-bg2">
            <TabWrapper className="px-2 flex flex-row gap-1 items-end h-[50px]">
                <FileTabItem />
                <FileTabItem />
            </TabWrapper>
        </section>
    )
}

export default FilesTab