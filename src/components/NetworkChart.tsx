import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type NetworkChartProps = {
  data: Array<{ time: string; value: number }>;
  color: string;
  label: string;
};

export const NetworkChart = ({ data, color, label }: NetworkChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 243, 255, 0.1)" />
        <XAxis 
          dataKey="time" 
          stroke="rgba(0, 243, 255, 0.5)"
          style={{ fontSize: '12px', fontFamily: 'monospace' }}
        />
        <YAxis 
          stroke="rgba(0, 243, 255, 0.5)"
          style={{ fontSize: '12px', fontFamily: 'monospace' }}
        />
        <Tooltip 
          contentStyle={{ 
            background: 'rgba(10, 10, 10, 0.9)', 
            border: '1px solid rgba(0, 243, 255, 0.3)',
            borderRadius: '8px',
            fontFamily: 'monospace'
          }}
          labelStyle={{ color: '#00f3ff' }}
        />
        <Line 
          type="monotone" 
          dataKey="value" 
          stroke={color} 
          strokeWidth={2}
          dot={{ fill: color, r: 4 }}
          activeDot={{ r: 6 }}
          name={label}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
