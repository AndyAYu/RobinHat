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
        url: '/api/users',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const fetchUserInfo = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}}`,
    })
)

export const updateUserStockInfo = (userId, ticker, amount, unit_price) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/stocks`,
    data: {
      stock: {
        ticker,
        amount,
        unit_price
      }
    }
  })
)