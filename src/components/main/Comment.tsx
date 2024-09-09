import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Comment as CommentType } from "../../../utils/types";

export default function Comment({
    comment,
    key
}:{
    comment:CommentType
    key?:string
}) {
    return (
        <Card key={key} className="w-[80%]">
            <CardHeader className="flex flex-row justify-start items-center gap-2">
                <Image 
                    src={comment.user?.avatar} 
                    alt={comment.user.firstName} 
                    width={50} 
                    height={50}
                    style={{
                        border:`2px solid ${comment.user.isLoggedIn ? "green":"red"}`,
                        width:50,
                        height:50,
                        borderRadius:"50%",
                        objectFit:"cover",
                    }}
                />
                <div className="flex flex-col justify-start items-center">
                    <CardTitle className="text-lg w-full text-start">{comment.user.firstName} {comment.user.lastName}</CardTitle>
                    <CardTitle className="text-base w-full text-start opacity-75">{comment.user.email}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="grid gap-4">
                <CardDescription>{comment.content}</CardDescription>
            </CardContent>
        </Card>
    )
}
