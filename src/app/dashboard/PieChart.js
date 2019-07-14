import React from 'react';
import {ResponsiveContainer, PieChart, Pie} from 'recharts';

const data = [{name: 'network 1', value: 2}, {name: 'network 3', value: 4}];

export default function PieCharts() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index,
          }) => {
            const RADIAN = Math.PI / 180;
            const radius = 25 + innerRadius + (outerRadius - innerRadius);
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="#8884d8"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central">
                {data[index].name} ({value})
              </text>
            );
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
