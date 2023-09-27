export const loginReqMock = {
    email: 'gaguin@teste.com',
    password: '@3456Suda',
};

export const registerReqMock = { name: 'Gaguin', ...loginReqMock };

export const userMock = {
    id: 1,
    name: 'Gaguin',
    email: 'gaguin@teste.com',
    password: '$2b$10$3Qg7YiX1X2YJjHf6mD6QIuL1x1YhRqZ9K7r5zjZ1Qp3iY8gZz0X0q',
}

export const jwtPayloadMock = {
    id: 1,
    name: 'Gaguin',
    email: 'gaguin@teste.com',
};