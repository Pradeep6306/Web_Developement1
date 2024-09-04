// Sample order data
let orders = [
    { orderNumber: '001', date: '2024-08-01', total: 'Rs 1000', status: 'Delivered' },
    { orderNumber: '002', date: '2024-08-15', total: 'Rs 1500', status: 'Shipped' },
    { orderNumber: '003', date: '2024-09-01', total: 'Rs 2000', status: 'Processing' }
];


let ordersContainer = document.getElementById('orders');


function renderOrders() {
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        orderDiv.innerHTML = `
            <div class="order-details">
                <p><strong>Order #:</strong> ${order.orderNumber}</p>
                <p><strong>Date:</strong> ${order.date}</p>
                <p><strong>Total:</strong> ${order.total}</p>
                <p><strong>Status:</strong> ${order.status}</p>
            </div>
        `;
        ordersContainer.appendChild(orderDiv);
    });
}


renderOrders();
