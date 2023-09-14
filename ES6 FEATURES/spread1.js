/* extract array elements and copy in new array
let ids=[101,102,103,104]
let new_ids=[...ids]

console.log(ids)
console.log(new_ids)
*/

/* extending array using spread operatot
let ids=[101,102,103,104]
let new_ids=[...ids,105,106,107,108]

console.log(ids)
console.log(new_ids)
*/

let a=[1,2,3,4,5]
let b=[6,7,8,9,10]
let c=[...a,...b]

console.log(c)
