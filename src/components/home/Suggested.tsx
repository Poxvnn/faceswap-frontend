import { useGetSuggested } from "@/hooks/useSwap";

interface SuggestedProps {
    active: boolean;
    goToVideo: () => void;
    setPreviewTargetUrl: (val: string | null) => void;
}

const Suggested: React.FC<SuggestedProps> = ({active, goToVideo, setPreviewTargetUrl}) => {

    const { data } = useGetSuggested();
    
    return (
        <>
        {
            active && 
                <section>
                    <div className="w-[500px] rounded-3xl overflow-hidden">
                        <div className="w-full bg-gray-500 h-[300px]"/>
                        <div className="px-2 py-4 flex gap-x-4 bg-white">
                            <div className="size-[50px] bg-gray-500 rounded-md"/>
                            <span>
                                <p>Suggested Video One</p>
                                <p>06:00</p>
                            </span>
                        </div>
                        <div className="w-full bg-blue-700 py-3 text-lg text-white text-center cursor-pointer" onClick={() => {goToVideo(); setPreviewTargetUrl('')}}>Use Video</div>
                    </div>
                </section>
        }
        </>
    )
}

export default Suggested