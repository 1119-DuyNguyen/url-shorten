"use client";
import Link from "next/link";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableCellProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledTableCell = styled(TableCell)<TableCellProps>(() => ({
    border: "1px solid #003d5b", // Customize your border color here
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.action.hover,
}));

const FeaturesTable = () => (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Features</StyledTableCell>
                    <StyledTableCell align="center">Lite</StyledTableCell>
                    <StyledTableCell align="center">Premium</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {[
                    {
                        feature: "Basic URL Shortening",
                        lite: true,
                        premium: true,
                    },
                    { feature: "Basic Analytics", lite: true, premium: true },
                    { feature: "Basic Redirects", lite: true, premium: true },
                    {
                        feature: "Advanced Analytics",
                        lite: false,
                        premium: true,
                    },
                    {
                        feature: "Traffic Source Insights",
                        lite: false,
                        premium: true,
                    },
                    { feature: "Ads Display", lite: true, premium: false },
                    {
                        feature: "Custom Link Aliases",
                        lite: false,
                        premium: true,
                    },
                    {
                        feature: "Password Protection",
                        lite: false,
                        premium: true,
                    },
                    {
                        feature: "QR Code Generation",
                        lite: false,
                        premium: true,
                    },
                    { feature: "Bulk Shortening", lite: false, premium: true },
                    {
                        feature: "Geo-tagging & Click Heatmap",
                        lite: false,
                        premium: true,
                    },
                ].map(({ feature, lite, premium }, index) => (
                    <StyledTableRow key={index}>
                        <StyledTableCell>{feature}</StyledTableCell>
                        <StyledTableCell align="center">
                            {lite ? "✓" : "×"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            {premium ? "✓" : "×"}
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
export default function Features() {
    return (
        <>
            <Box
                display="flex"
                flexDirection={{ xs: "column" }}
                justifyContent="space-around"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                >
                    <Box paddingBottom={2}>
                        <Typography
                            variant="h2"
                            color="primary"
                            textTransform="uppercase"
                        >
                            The Tools You Need
                        </Typography>
                        <Typography variant="h2" color="grey">
                            All in One Place.
                        </Typography>
                        <Typography variant="subtitle1">
                            Interested in our Latest Features?{" "}
                            <Link href="#">
                                Try Premium Today (Coming Soon)
                            </Link>
                        </Typography>
                    </Box>
                </Box>

                <FeaturesTable />
            </Box>
        </>
    );
}
