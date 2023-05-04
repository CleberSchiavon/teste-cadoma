import { Card, CardHeader } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import dynamic from 'next/dynamic';

import useChart from '@/components/chart/useChart';

import { fNumber } from '@/utils/formatNumbers';

import { StyledChartWrapper } from './styled';

import { ChartData } from '@/types/Chart';

interface IOperatingIncome {
  title: string;
  chartData: Array<ChartData>;
  chartColors?: Array<string>;
  subheader?: string;
}

export default function OperatingIncome({
  title,
  subheader,
  chartColors,
  chartData,
  ...other
}: IOperatingIncome) {
  const theme = useTheme();

  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = useChart({
    colors: chartColors,
    labels: chartLabels,
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName: string) => fNumber(seriesName),
        title: {
          formatter: (seriesName: string) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } },
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

      <StyledChartWrapper dir='ltr'>
        <Chart
          type='pie'
          series={chartSeries}
          options={chartOptions}
          height={280}
        />
      </StyledChartWrapper>
    </Card>
  );
}
