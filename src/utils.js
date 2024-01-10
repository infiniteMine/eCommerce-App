import { supabase } from './supabaseClient.js'

export const getProducts = async () => {
    let { data, error } = await supabase
        .from('products')
        .select()
        .order('ratings', { ascending: false })

    if (!data) {
        console.log(error)
    }

    return data
}

// export const getOrders = async () => {
//     let { data, error } = await supabase
//     .auth()
//     .admin

//     if (!data) {
//         console.log(error)
//     }

//     return data
// }