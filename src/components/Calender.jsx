/* eslint-disable react/jsx-no-undef */
import { Timeline } from "flowbite-react";
import { Container } from "./Container";



export function Calendar() {
    return( 
        <section
        id="calendar"
        className="relative overflow-hidden  py-32">
            <Container className="relative">
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
                                3-31 March 
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
                                21-23 April
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