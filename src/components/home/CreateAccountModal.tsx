import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {AnimatePresence} from 'framer-motion'
import { useState } from "react"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useCreateUser } from "@/hooks/useAuthData"
import toast from "react-hot-toast"

interface CreateAccountModalProps {
    active: boolean;
    goBack: (value: 'login') => void;
}

const CreateAccountModal: React.FC<CreateAccountModalProps> = ({active, goBack}) => {
    const [credentials, setCredentials] = useState({email: '', password: ''})
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {mutate} = useCreateUser();

    const handleCreateAccount = () => {
        if (credentials.email !== '' && credentials.password !== '') {
            mutate(credentials, {onSuccess: () => {toast.success('Account has been created successfully')}, onError: () => {toast.error('An issue occured!')}});
        } else {
            toast.error('Please fill in all fields')
        }
    }

  return (
    <AnimatePresence>
           {active &&
            <>
                <DialogHeader>
                    <DialogTitle>Create a new account</DialogTitle>
                    <DialogDescription>'Enter your email and password or use a social login option'</DialogDescription>
                </DialogHeader>
                    <>
                        <form className="space-y-4 mt-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" value={credentials.email} onChange={(e) => setCredentials((prev) => ({...prev, email: e.target.value}))} required/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                    <div className="relative">
                                        <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="********" value={credentials.password} onChange={(e) => setCredentials((prev) => ({...prev, password: e.target.value}))}required/>
                                        <button className="absolute right-3 top-3" onClick={(e) => {e.preventDefault(); setShowPassword(!showPassword)}}>
                                            {!showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                        </button>
                                    </div>
                            </div>
                            <div className="w-full bg-purple-600 p-2 text-center text-white font-medium rounded-lg hover:bg-opacity-95 hover:bg-purple-700 hover:scale-[1.02] transition duration-300 ease-in cursor-pointer " onClick={handleCreateAccount}>Create Account</div>
                        </form>
                    </>
                <div className="text-center text-sm text-gray-500 mt-4"> Already have an account? <button className="text-purple-600 hover:underline" onClick={() => goBack('login')}>Sign in</button> </div>
            </>}
       </AnimatePresence>
  )
}

export default CreateAccountModal