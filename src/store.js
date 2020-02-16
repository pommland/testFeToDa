import { writable } from 'svelte/store'

export const user = writable({
    username:'',
})

export const postID = writable(null)
export const pages = 'Login' // อยากให้ค่าเริ่มต้นเป็น 'Login'