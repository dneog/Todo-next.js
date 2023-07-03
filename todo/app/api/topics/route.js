import connectMongoDB from "@/libs/mongoDb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title}= await request.json();
    await connectMongoDB();
    await Topic.create({title});
    return NextResponse.json({message: 'Todo Created'}, {status: 201})
}

export async function GET(){
    await connectMongoDB();
    const topics= await Topic.find();
    return NextResponse.json({topics})
}

export async function DELETE(req){
    const id= req.nextUrl.searchParams.get("id")
    await connectMongoDB();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message: 'Todo Deleted'}, {status: 200})
}
