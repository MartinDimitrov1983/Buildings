const initDB = () => {
    const buildings = [
        {
            id: 1,
            name: 'Windsor',
            area: '200',
            location: 'London',
            image: 'https://i.ytimg.com/vi/gVwV_vnS_rg/maxresdefault.jpg'
        },
        {
            id: 2,
            name: 'Astoria',
            area: '300',
            location: 'Paris',
            image: 'https://static.skillshare.com/cdn-cgi/image/quality=85,width=1242,height=839,format=auto/uploads/project/48419/cover_1242_f3834c2a7a8d5d64b4bddf71e195c510.png'
        },
        {
            id: 3,
            name: 'Blue Lagoon',
            area: '150',
            location: 'Amsterdam',
            image: 'https://ak.picdn.net/shutterstock/videos/6859294/thumb/9.jpg'
        },
        {
            id: 4,
            name: 'Sofia Estate',
            area: '400',
            location: 'Sofia',
            image: 'https://static.skillshare.com/cdn-cgi/image/quality=85,width=1242,height=839,format=auto/uploads/project/48419/cover_1242_f3834c2a7a8d5d64b4bddf71e195c510.png'
        },
        {
            id: 5,
            name: 'Varna Palace',
            area: '350',
            location: 'Varna',
            image: 'https://ak.picdn.net/shutterstock/videos/6859294/thumb/9.jpg'
        }
    ];

    localStorage.setItem('buildings', JSON.stringify(buildings));
};

export default initDB;
