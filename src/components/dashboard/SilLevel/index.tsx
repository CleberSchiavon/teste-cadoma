import { Box, Card, CardHeader } from '@mui/material';
import dynamic from 'next/dynamic';

import useChart from '@/components/chart/useChart';

import { fNumber } from '@/utils/formatNumbers';

import { ChartData } from '@/types/Chart';

interface ISilLevel {
  title: string;
  subheader: string;
  chartData: Array<ChartData>;
}

export default function SilLevel({
  title,
  subheader,
  chartData,
  ...other
}: ISilLevel) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = useChart({
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName: string) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
    },
    xaxis: {
      categories: chartLabels,
    },
  });

  const Chart = dynamic(
    () => {
      return import('react-apexcharts');
    },
    { ssr: false }
  );

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir='ltr'>
        <Chart
          type='bar'
          series={[{ data: chartSeries }]}
          options={chartOptions}
          height={364}
        />
      </Box>
    </Card>
  );
}
