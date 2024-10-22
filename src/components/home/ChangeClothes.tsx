import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { Image as ImageIcon, Shirt } from "lucide-react"
import { useRef, useState } from "react"
import { Textarea } from "../ui/textarea"


interface ChangeClothesProps {
    active: boolean;
    setPreviewUrl: (val: string | null) => void;
}


const ChangeClothes: React.FC<ChangeClothesProps> = ({active, setPreviewUrl}) => {
    const sourceInputRef = useRef<HTMLInputElement>(null);
    const [sourceFile, setSourceFile] = useState<File | null>(null);


    const handleSourceUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
        setSourceFile(file)
        const url = URL.createObjectURL(file)
        setPreviewUrl(url)
        }
        //This should be removed in the final version
        console.log(sourceFile);
    }

    const triggerSourceUpload = () => {
        sourceInputRef.current?.click()
    }


    return (
        <>
            { active &&
            <Card className="w-full">
                <CardContent className="p-6">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold"> 1</div>
                                <h3 className="font-medium text-gray-700">Upload a full-body photo</h3>
                            </div>
                            <input type="file" ref={sourceInputRef} className="hidden" onChange={handleSourceUpload} accept={"image/*"}/>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={triggerSourceUpload}>
                                    <> <ImageIcon className="w-4 h-4 mr-2" />Upload Source Photo</>
                            </Button>
                            <p className="text-xs text-gray-500">Drag or upload your photo JPG, PNG, WEBP</p>
                        </div>

                        <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                                    <h3 className="font-medium text-gray-700">Describe the desired outfit</h3>
                                </div>
                                <div>
                                    <Label htmlFor="clothesDescription">Outfit Description</Label>
                                    <Textarea id="clothesDescription" placeholder="E.g., wearing a red dress, blue jeans with a white t-shirt, formal suit with a tie, etc." rows={4}/>
                                </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                                <h3 className="font-medium text-gray-700">Click Change Clothes Now to start</h3>
                            </div>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                <> <Shirt className="w-4 h-4 mr-2" /> Change Clothes Now </>
                            </Button>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600">High quality</span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">1080P</span>
                                    <Switch />
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card> 
            }
        </>
    )
}

export default ChangeClothes