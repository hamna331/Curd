import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';

function ArrayOfObjects() {
    const fighterAircrafts = [
        {
            id: 1,
            name: 'F-22 Raptor',
            country: 'United States',
            year: 1997,
            details: {
                description: 'The F-22 Raptor is an advanced stealth fighter jet.',
                specifications: ['Max Speed: Mach 2.25', 'Range: 1,840 miles', 'Crew: 1'],
            },
            imgSrc: 'https://t3.ftcdn.net/jpg/05/71/47/24/240_F_571472462_z2Qvv2TTLacZQRBnd0NIjMvCJRdJyCVp.jpg',
        },
        {
            id: 2,
            name: 'Su-57',
            country: 'Russia',
            year: 2010,
            details: {
                description: 'The Su-57 is a fifth-generation Russian fighter aircraft.',
                specifications: ['Max Speed: Mach 2.0', 'Range: 1,500 miles', 'Crew: 1'],
            },
            imgSrc: 'https://www.eurasiantimes.com/wp-content/uploads/2023/08/SU-57-1.jpg',
        },
        {
            id: 3,
            name: 'F-35 Lightning II',
            country: 'United States',
            year: 2006,
            details: {
                description: 'The F-35 Lightning II is a family of single-seat, single-engine, all-weather stealth multirole fighters.',
                specifications: ['Max Speed: Mach 1.6', 'Range: 1,500 miles', 'Crew: 1'],
            },
            imgSrc: 'https://t3.ftcdn.net/jpg/04/98/45/86/360_F_498458609_RENWST0VXUoxeWLbqeAAhZauvjcPC3G4.jpg',
        },
        {
            id: 4,
            name: 'Eurofighter Typhoon',
            country: 'Multi-national',
            year: 2003,
            details: {
                description: 'The Eurofighter Typhoon is a twin-engine, canard-delta wing, multirole fighter.',
                specifications: ['Max Speed: Mach 2.0', 'Range: 1,380 miles', 'Crew: 1'],
            },
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXw5i7mD8Ita9Oh25CJa9AYXPCwlwi_S9JD2Q2l_wqQ&s',
        },
        {
            id: 5,
            name: 'J-20',
            country: 'China',
            year: 2017,
            details: {
                description: 'The Chengdu J-20 is a fifth-generation, single-seat, twinjet, all-weather stealth fighter.',
                specifications: ['Max Speed: Mach 2.0', 'Range: 1,200 miles', 'Crew: 1'],
            },
            imgSrc: 'https://i.insider.com/5796329a88e4a78c148ba733?width=1000&format=jpeg&auto=webp',
        },
        {
            id: 6,
            name: 'Rafale',
            country: 'France',
            year: 2001,
            details: {
                description: 'The Dassault Rafale is a French twin-engine, canard-delta wing, multirole fighter aircraft.',
                specifications: ['Max Speed: Mach 1.8', 'Range: 2,000 miles', 'Crew: 1'],
            },
            imgSrc: 'https://www.airdatanews.com/wp-content/uploads/2021/12/rafale-uae.jpg',
        },
        {
            id: 7,
            name: 'F-15 Eagle',
            country: 'United States',
            year: 1972,
            details: {
                description: 'The F-15 Eagle is an American twin-engine, all-weather tactical fighter aircraft.',
                specifications: ['Max Speed: Mach 2.5', 'Range: 3,450 miles', 'Crew: 1'],
            },
            imgSrc: 'https://militarymachine.com/wp-content/uploads/2017/04/F-15-Eagle-aircraft-in-air.jpg',
        },
        {
            id: 8,
            name: 'Mig-29 Fulcrum',
            country: 'Russia',
            year: 1982,
            details: {
                description: 'The Mikoyan MiG-29 is a twin-engine jet fighter aircraft.',
                specifications: ['Max Speed: Mach 2.25', 'Range: 1,430 miles', 'Crew: 1'],
            },
            imgSrc: 'https://miro.medium.com/v2/resize:fit:1024/0*d27Hq2DMGOcuvNyZ.jpeg',
        },

        {
            id: 9,
            name: 'JF-17 Thunder',
            country: 'Pakistan',
            year: 2003,
            details: {
                description: 'The JF-17 Thunder is a multi-role fighter aircraft developed jointly by China and Pakistan.',
                specifications: ['Max Speed: Mach 1.6', 'Range: 1,200 miles', 'Crew: 1'],
            },
            imgSrc: 'https://fighterjetsworld.com/wp-content/uploads/2021/01/First-Picture-Of-JF-17-Thunder-Block-III.jpg',
        },

    ];

    const fighterAircraftCollection = [
        {
            id: 1,
            name: 'F-22 Raptor',
            country: 'United States',
            variants: [
                {
                    variantId: 101,
                    variantName: 'F-22A',
                    configurations: [
                        {
                            configId: 1001,
                            configName: 'Air Superiority',
                            details: {
                                description: 'Optimized for air-to-air combat.',
                                specifications: ['Advanced radar', 'High maneuverability'],
                            },
                        },
                        {
                            configId: 1002,
                            configName: 'Ground Attack',
                            details: {
                                description: 'Capable of ground attack missions.',
                                specifications: ['Precision-guided munitions', 'Stealth features'],
                            },
                        },
                    ],
                },
                // ... add more variants for F-22 Raptor
            ],
        },
        {
            id: 2,
            name: 'Su-57',
            country: 'Russia',
            variants: [
                {
                    variantId: 201,
                    variantName: 'Su-57S',
                    configurations: [
                        {
                            configId: 2001,
                            configName: 'Multirole',
                            details: {
                                description: 'Versatile for both air-to-air and air-to-ground missions.',
                                specifications: ['Advanced avionics', 'Stealth capabilities'],
                            },
                        },
                        // ... add more configurations for Su-57S
                    ],
                },
                // ... add more variants for Su-57
            ],
        },
        // ... add more fighter aircraft
    ];

    return (
        <>
            <div>
                <h1 className='text-center'>Famous Fighter Aircraft</h1>
                <div className='container'>
                    <Row>
                        {fighterAircrafts.map((aircraft) => (
                            <Col key={aircraft.id} className='mt-5 h-100' lg={4}>
                                <Card >
                                    <Card.Img variant="top" src={aircraft.imgSrc} alt={aircraft.name} style={{ height: "300px" }} />
                                    <Card.Body>
                                        <Card.Title>{aircraft.name}</Card.Title>
                                        <Card.Text>
                                            <p>Country: {aircraft.country}</p>
                                            <p>Year: {aircraft.year}</p>
                                            <div>
                                                <h4>Details:</h4>
                                                <p>{aircraft.details.description}</p>
                                                <ul>
                                                    {aircraft.details.specifications.map((spec, index) => (
                                                        <li key={index}>{spec}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

            <div>
                <h1>Famous Fighter Aircraft</h1>
                <div className='container'>
                    {fighterAircraftCollection.map((aircraft) => (
                        <div key={aircraft.id}>
                            <h2>{aircraft.name}</h2>
                            <Row>
                                {aircraft.variants.map((variant) => (
                                    <Col key={variant.variantId} lg={4} className="mt-4">
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{variant.variantName}</Card.Title>
                                                <ul>
                                                    {variant.configurations.map((config) => (
                                                        <li key={config.configId}>
                                                            <h5>{config.configName}</h5>
                                                            <p>{config.details.description}</p>
                                                            <ul>
                                                                {config.details.specifications.map((spec, index) => (
                                                                    <li key={index}>{spec}</li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    ))}
                </div>
            </div>
        </>


    )
}

export default ArrayOfObjects