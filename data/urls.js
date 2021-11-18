
export const searchItemURL = (searchValue) => {
   return url =  `${process.env.NEXT_PUBLIC_API_SERVER}/itemSearch?itemName=${searchValue}`
}