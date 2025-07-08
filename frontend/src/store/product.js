import {create} from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),

    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.image || !newProduct.price){
            return {success:false, message:"Please fill in all fields."}
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(newProduct)
        })
        if (!res.ok) {
            // try to pull an error message, or at least surface status
            let errText
            try { errText = await res.text() } catch {}
            return { success: false, message: `Server error ${res.status}: ${errText}` }
          }
        const date = await res.json();
        set((state) => ({products:[...state.prodcuts, data.data] }))
        return {success:true, message:"Product Created Successfully"}
    }
}))  

