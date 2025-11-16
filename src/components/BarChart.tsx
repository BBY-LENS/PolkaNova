import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type BarChartProps = {
  data: Array<{ name: string; value: number }>;
  color: string;
  label: string;
};

export const BarChart = ({ data, color, label }: BarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 243, 255, 0.1)" />
        <XAxis 
          dataKey="name" 
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
        <Bar 
          dataKey="value" 
          fill={color} 
          name={label}
          radius={[8, 8, 0, 0]}
        />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};
