let balance = 100.00;
let cards = [
    { name: 'Kaslı Hasan', price: 101.00, img: 'https://cdn.discordapp.com/attachments/890639916525035520/1249030927334510752/IMG_20240607_010555_644.jpg?ex=6665d232&is=666480b2&hm=2d1457b735819fc4120eed2a1c9699de4021da97a08a21d2b9157deb54007197&', inCart: false },
    { name: 'mal salyangoz', price: 10.00, img: 'https://cdn.discordapp.com/attachments/890639916525035520/1249055476256211056/IMG-20240607-WA0020.jpg?ex=6665e90f&is=6664978f&hm=02333e4e379124ddba8926167d09a42f1cde0d2690767dc3a70427e0363acd20&', inCart: false },
    { name: 'güven veren adam', price: 12.00, img: 'https://cdn.discordapp.com/attachments/890639916525035520/1249056216395677727/20240604_174203.jpg?ex=6665e9c0&is=66649840&hm=1f03ef3845ed0337e7c334dced05f7d48326f4d3f81d1d39c2580deb962bc284&', inCart: false },
    { name: 'sansi Salvo', price: 20.00, img: 'https://cdn.discordapp.com/attachments/890639916525035520/1249059133194371082/20240603_212920.jpg?ex=6665ec77&is=66649af7&hm=db22349f1c73238dcc47e954e87d22d49dd65cd5902315f7aa58b9fbb8e42d3d&', inCart: false },
    { name: 'morinyo babaninyo', price: 25.00, img: 'https://cdn.discordapp.com/attachments/890639916525035520/1249059265021349929/29abc3ca36ea45279967b838406ae403.jpg?ex=6665ec97&is=66649b17&hm=22bed77325f277f4f56a8a57e2b0539c9de941f721a34f4eaeda9c7618df2cf2&', inCart: false },
    { name: 'bu ne sıcak', price: 15.00, img: 'https://cdn.discordapp.com/attachments/890639916525035520/1249059688893644840/Picsart_24-06-08_20-57-04-229.png?ex=6665ecfc&is=66649b7c&hm=ee8f99c5d412ddbd47b1d52a3f853d315c06243a0dbb0d7a83109fae1bb2b735&', inCart: false },
    { name: 'siyah seven İsmail kartal', price: 35.00, img: 'https://cdn.discordapp.com/attachments/890639916525035520/1249059920138080326/20240530_002831.jpg?ex=6665ed33&is=66649bb3&hm=9cf30e5d3ba48ead18591f93441a36b13cd23ebc1b37690610f267150f7ebd9e&', inCart: false }
];

function updateBalance() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

function toggleCart(index) {
    if (cards[index].inCart) {
        cards[index].inCart = false;
        balance += cards[index].price;
    } else {
        if (balance >= cards
