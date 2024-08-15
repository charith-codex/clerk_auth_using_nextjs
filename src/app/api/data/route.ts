import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET() {
    const {userId} = auth();
    const user = await currentUser()

    if(!userId) {
        return NextResponse.json({message: "Not authenticated"}, {status: 401})
    }

    return NextResponse.json(
        {
            message:"Authentication",
            data: {userId: userId, username: user?.firstName},
        },
        {status: 200}
    )
}