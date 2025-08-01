export interface Ticket {
    title: string;
    description: string;
    category: string;
    priority: string;
    progress: string;
    status: string;
}

export interface TestData {
    ticket: Ticket[]
}

export const TEST_DATA: TestData = {
    ticket: [
        {
            title: 'Fix The Juan PC V2',
            description: 'We need to fix the computer. Check the HD',
            category: 'Hardware Problem',
            priority: '2',
            progress: '5',
            status: 'Started'
        },
        {
            title: 'Develop the web for Cats',
            description: 'Book a call with Chris. Ask for core functionalities',
            category: 'Application Development',
            priority: '4',
            progress: '2',
            status: 'Started'
        }
    ]

}