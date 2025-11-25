// "use client"
// import { ShoppingCart } from "lucide-react"
// import { motion } from "motion/react"
// const Welcome = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen p-6'>
//       <motion.div
//       initial={{
//         opacity : 0,
//         y: -20
//       }}
//       animate={{
//         opacity : 1,
//         y: 0
//       }}
//       transition={{
//         duration : 1
//       }}
//       className="flex items-center gap-6"
//       >
// <ShoppingCart strokeWidth={3} />
// <h1 className="text-4xl md:text-5xl font-bold text-green-900">snapcart</h1>
//       </motion.div>
    
//     <motion.p
//     initial={{
//         opacity : 0,
//         y: -20
//       }}
//       animate={{
//         opacity : 1,
//         y: 0
//       }}
//       transition={{
//         duration : 1
//       }}
//     >
//      The Smarter Way to Shop Groceries
//     </motion.p>
//     </div>
//   )
// }

// export default Welcome

import { Button } from "@/components/ui/button";
import { ShoppingBasket, Bike, ArrowRight } from "lucide-react";
type propType = {
  nextStep : (s: number)=>void

}
export default function Welcome({nextStep}: propType) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center 
                    bg-gradient-to-b from-green-100 to-white px-6">

      {/* Logo */}
      <div className="text-green-700 mb-4">
        <ShoppingBasket className="w-12 h-12 mx-auto" />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-green-700">Snapcart</h1>

      {/* Subtitle */}
      <p className="text-gray-600 mt-3 max-w-lg text-lg">
        Your one-stop destination for fresh groceries, organic produce,
        and daily essentials delivered right to your doorstep.
      </p>

      {/* Icons */}
      <div className="flex items-center gap-16 mt-10">
        <ShoppingBasket className="text-green-600 w-24 h-24" />
        <Bike className="text-orange-500 w-24 h-24" />
      </div>

      {/* Next Button */}
      <Button 
      onClick={()=>nextStep(2)}
        className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-6 
                   text-lg rounded-xl flex items-center gap-2"
      >
        Next
        <ArrowRight className="w-5 h-5" />
      </Button>

    </div>
  );
}
