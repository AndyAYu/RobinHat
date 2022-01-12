export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/user',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const fetchUserInfo = (userId) => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'GET',
    })
)

export const fetchUserStockInfo = (userId) => (
    $.ajax({
        url: `/api/users/${userId}/stocks`,
        method: 'GET'
    })
)

export const updateUserStockInfo = (userId, ticker, amount, unit_price) => (
    $.ajax({
        url: `/api/users/${userId}/stocks`,
        method: 'POST',
        data: {
            stock: {
                unit_price,
                amount,
                ticker,
            }
        }
    })
)

export const addBalance = (userId, depositAmount) => (
    $.ajax({
        url: `/api/users/${userId}`,
        method: 'PATCH',
        data: {
            user:{
                deposit_amount: depositAmount
            }
        }
    })
)