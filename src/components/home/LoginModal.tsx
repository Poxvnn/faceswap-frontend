import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FaGoogle, FaTelegram } from "react-icons/fa"


interface LoginModalProps { 
    isLoginOpen: boolean;
    setIsLoginOpen: (value: boolean) => void;
    setLoggedIn: (value: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({isLoginOpen, setIsLoginOpen, setLoggedIn}) => {
    const [showTelegramInput, setShowTelegramInput] = useState(false);
    const [telegramCode, setTelegramCode] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleTelegramCodeSubmit = () => {
    if (telegramCode === '123456') {
        console.log('Telegram login successful')
        setIsLoginOpen(false)
        setLoggedIn(true)
    } else {
        console.log('Invalid Telegram code')
    }
    }

    const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempted with:', email, password)
    setIsLoginOpen(false)
    setLoggedIn(true)
    }

    const handleGoogleLogin = () => {
    console.log('Google login attempted')
    setIsLoginOpen(false)
    setLoggedIn(true)
    }

    const handleTelegramLogin = () => {
    setShowTelegramInput(true)
    }

    return (
    <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
    <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
        <DialogTitle>Login to your account</DialogTitle>
        <DialogDescription>
            {showTelegramInput ? 'Enter your Telegram Code' : 'Enter your email and password or use a social login option'}
        </DialogDescription>
        </DialogHeader>
        {showTelegramInput ? (
        <form onSubmit={(e) => { e.preventDefault(); handleTelegramCodeSubmit(); }} className="space-y-4 mt-4">
            <div className="space-y-2">
            <Label htmlFor="telegramCode">Telegram Code</Label>
            <Input id="telegramCode" type="text" placeholder="Enter Telegram Code" value={telegramCode} onChange={(e) => setTelegramCode(e.target.value)} required/>
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Login with Telegram</Button>
            <Button type="button" onClick={() => setShowTelegramInput(false)} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800">Back to Login Options</Button>
        </form>
        ) : (
        <>
            <form onSubmit={handleLogin} className="space-y-4 mt-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}required/>
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Sign In</Button>
            </form>
            <div className="mt-4 space-y-2">
            <Button onClick={handleGoogleLogin} className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"><FaGoogle className="mr-2" /> Sign in with Google</Button>
            <Button onClick={handleTelegramLogin} className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center"><FaTelegram className="mr-2" /> Sign in with Telegram</Button>
            </div>
        </>
        )}
        <div className="text-center text-sm text-gray-500 mt-4"> Don't have an account? <a href="#" className="text-purple-600 hover:underline">Sign up</a> </div>
    </DialogContent>
    </Dialog>
    )
}

export default LoginModal