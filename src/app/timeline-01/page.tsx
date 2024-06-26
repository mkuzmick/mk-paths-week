import { ReactNode } from 'react';

interface TimelineProps {
    url: string;
}

const Timeline = ({ url }: TimelineProps) => {
    return (
        <div className='min-h-screen flex flex-col bg-slate-300'>
                <iframe
                    src={url}
                    width="100%"
                    height="600px"
                    frameBorder="0"
                ></iframe>
            
        </div>
    );
}

export default function Page() {
    return (
        <main>
            <Timeline url="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk&font=Default&lang=en&initial_zoom=2&height=100%" />
        </main>
    )
}