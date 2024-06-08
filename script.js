body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
}
.balance {
    font-size: 20px;
}
main {
    padding: 20px;
}
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 200px;
}
.card img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}
.card .name {
    font-size: 18px;
    margin-top: 10px;
}
.card .price {
    font-size: 16px;
    color: #333;
}
.card button {
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 16px;
    background-color: #008CBA;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
.card button:hover {
    background-color: #007B9E;
}
footer {
    text-align: center;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
}
.admin-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.hidden {
    display: none;
}
