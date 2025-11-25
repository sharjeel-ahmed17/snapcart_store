// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req : NextRequest) {
//     try {
//         NextResponse.json(
//             {message  : "api is running"}
//         )
//     } catch (error) {
//         console.log("err" , error);
        
        
//     }
    
// }


export async function GET() {
  return Response.json({
    message: 'api is running',
  })
}