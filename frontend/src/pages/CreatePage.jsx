import React from 'react'

const CreatePage = () => {
  return (
    <div>CreatePage</div>
  )
}

export default CreatePage
// import React, { useState } from 'react'
// import { Box, Container, Heading, useColorModeValue, Vstack } from "@chakra-ui/react"


// const CreatePage = () => {
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "", 
//     image: "",
//   });

//   return <Container maxW={"container.sm"}>
//     <Vstack
//       spacing={8}
//     >
//       <Heading as={"h1"} size={"2x1"} textAlight={"center"} mb={8}>
//         Create New Product 
//       </Heading>
//       <Box
//         w={"full"} bg={useColorModeValue("white", "gray.800")}
//         p={6} rounded={"lg"} shadow={"md"}
//       >
//         <Vstack spaceing={4}>
//         <Input 
//           placeholder="Product Name"
//           name="name"
//           value={newProduct.name}
//           onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
// 				/>
// 				<Input
// 					placeholder='Price'
// 					name='price'
// 					type='number'
// 					value={newProduct.price}
// 					onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
// 				/>
// 				<Input
// 					placeholder='Image URL'
// 					name='image'
// 					value={newProduct.image}
// 					onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
// 				/>

//         </Vstack>

//       </Box>
//     </Vstack>
//   </Container>
// };

// export default CreatePage