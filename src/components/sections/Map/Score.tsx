interface ScoreProps {
    score: number;
}

const Score = ({ score }: ScoreProps) => (
    <div>
        <h2>Score: {score.toFixed(2)} km left</h2>
    </div>
);

export default Score;
