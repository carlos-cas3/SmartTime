import { Bar } from 'recharts';
import BarChartBase from './BarChartBase';


export function BarChartComparative({ data, keys }) {
return (
<BarChartBase data={data}>
{keys.map(k => (
<Bar key={k} dataKey={k} />
))}
</BarChartBase>
);
}