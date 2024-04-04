///Task # 15 //
//Changing Guest List: 
//You just heard that one of your guests can’t make the dinner, so you need to send
//out a new set of invitations. You’ll have to think of someone else to invite.Sn
let guest_list1 = ["Bisma", "Ayesha", "Sana", "Neha", "Kainat"];
guest_list1.forEach(guest_list1 => {
    console.log(`Dear ${guest_list1}, would you like to join me for dinner?`);
});
let unavailable = "Ayesha";
console.log(`${unavailable} can't make it to dinner.`);
let new_guest = "Noorulain";
guest_list1[guest_list1.indexOf(unavailable)] = new_guest;
guest_list1.forEach(guest_list1 => {
    console.log(`Dear ${guest_list1}, would you like to join me for dinner?`);
});
export {};
