/* eslint-disable react/jsx-no-undef */
import { Timeline } from "flowbite-react";
import { Container } from "./Container";



export function Calendar() {
    return( 
        <section
        id="calendar"
        className="relative overflow-hidden  py-32">
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0 pb-20" >
                    <h2
                    id="speakers-title"
                    className="md:text-center font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
                    >
                    The agenda
                    </h2>
                </div>
                <div>

                </div>
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                February 2022
                            </Timeline.Time>
                            <Timeline.Title>
                                ???
                            </Timeline.Title>
                            <Timeline.Body>
                                ???.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                13 March 
                            </Timeline.Time>
                            <Timeline.Title>
                                Registration
                            </Timeline.Title>
                            <Timeline.Body>
                                You will have four weeks to register for the HAKS.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                            <Timeline.Time>
                                12-14 May
                            </Timeline.Time>
                            <Timeline.Title>
                                HAKS days
                            </Timeline.Title>
                            <Timeline.Body>
                                Build your team and compete to win the prize pool.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </Container>
        </section>
    )
}