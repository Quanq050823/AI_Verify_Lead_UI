"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";
import CustomDropdown from "./CustomDropdown";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BalanceOverview: React.FC = () => {
	// Chart
	const [isChartLoaded, setChartLoaded] = useState(false);

	useEffect(() => {
		setChartLoaded(true);
	}, []);

	const series = [
		{
			name: "Call Attempt",
			data: [5, 12, 20, 23, 25, 30, 40, 45, 50, 70, 65, 80],
		},
		{
			name: "Calling Fail",
			data: [15, 20, 30, 30, 35, 45, 60, 70, 80, 85, 95, 120],
		},
	];

	const options: ApexOptions = {
		chart: {
			zoom: {
				enabled: true,
			},
			toolbar: {
				show: false,
			},
		},
		colors: ["#AD63F6", "#605DFF"],
		dataLabels: {
			enabled: false,
		},
		grid: {
			show: true,
			borderColor: "#ECEEF2",
		},
		stroke: {
			curve: "straight",
			width: 2,
		},
		xaxis: {
			categories: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			],
			axisTicks: {
				show: false,
				color: "#ECEEF2",
			},
			axisBorder: {
				show: false,
				color: "#ECEEF2",
			},
			labels: {
				show: true,
				style: {
					colors: "#8695AA",
					fontSize: "12px",
				},
			},
		},
		yaxis: {
			tickAmount: 6,
			max: 150,
			min: 0,
			labels: {
				formatter: (val) => {
					return "$" + val + "k";
				},
				style: {
					colors: "#64748B",
					fontSize: "12px",
				},
			},
			axisBorder: {
				show: false,
				color: "#ECEEF2",
			},
			axisTicks: {
				show: false,
				color: "#ECEEF2",
			},
		},
		legend: {
			show: true,
			position: "top",
			fontSize: "12px",
			horizontalAlign: "left",
			itemMargin: {
				horizontal: 8,
				vertical: 0,
			},
			labels: {
				colors: "#64748B",
			},
			markers: {
				shape: "diamond",
				offsetX: -2,
				offsetY: -0.5,
			},
		},
	};

	return (
		<>
			<Card
				sx={{
					boxShadow: "none",
					borderRadius: "7px",
					mb: "25px",
					padding: { xs: "18px", sm: "20px", lg: "25px" },
				}}
				className="rmui-card"
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						mb: "25px",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontSize: { xs: "16px", md: "18px" },
							fontWeight: 700,
						}}
						className="text-black"
					>
						Call Attemp Statistics
					</Typography>

					<Box>
						<CustomDropdown
							options={["Current Week", "Current Month", "Current Year"]} // Need to change the options also in CustomDropdown file
							onSelect={(value) => console.log(value)}
							defaultLabel="Current Year"
						/>
					</Box>
				</Box>

				<Box
					sx={{
						marginBottom: "-15px",
						marginLeft: "-10px",
					}}
				>
					{isChartLoaded && (
						<Chart
							options={options}
							series={series}
							type="area"
							height={355}
							width={"100%"}
						/>
					)}
				</Box>

				<Box
					sx={{
						mt: "10px",
						textAlign: "center",
						display: "flex",
						gap: 2,
						flexWrap: "wrap",
						justifyContent: "center",
					}}
				>
					<Box
						sx={{
							display: { sm: "flex" },
							alignItems: "center",
							gap: 1,
						}}
					>
						<Typography
							component="span"
							fontWeight={600}
							sx={{ fontSize: { xs: "18px", md: "20px" } }}
							className="text-primary"
						>
							423
						</Typography>
						<Typography component="span" display="block">
							Call Processed
						</Typography>
					</Box>

					<Box
						sx={{
							display: { sm: "flex" },
							alignItems: "center",
							gap: 1,
						}}
					>
						<Typography
							component="span"
							fontWeight={600}
							sx={{ fontSize: { xs: "18px", md: "20px" } }}
							className="text-purple"
						>
							30
						</Typography>
						<Typography component="span" display="block">
							Failed
						</Typography>
					</Box>

					<Box
						sx={{
							display: { sm: "flex" },
							alignItems: "center",
							gap: 1,
						}}
					>
						<Typography
							component="span"
							fontWeight={600}
							sx={{ fontSize: { xs: "18px", md: "20px" } }}
							className="text-success"
						>
							81.2%
						</Typography>
						<Typography component="span" display="block">
							Success Rate
						</Typography>
					</Box>
				</Box>
			</Card>
		</>
	);
};

export default BalanceOverview;
