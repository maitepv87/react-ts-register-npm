import type { PackageSummary } from "../types";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { ActionButton } from "./";

interface PackageListItemProps {
  pack: PackageSummary;
}

export const PackageListItem = ({ pack }: PackageListItemProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        padding: 1,
        mb: 1,
      }}
    >
      <CardContent sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="h6"
          component={Link}
          to={`/packages/${pack.name}`}
          sx={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}
        >
          {pack.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pack.description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {(pack.keywords || []).map((keyword, index) => (
            <Chip key={`${keyword}-${index}`} label={keyword} size="small" />
          ))}
        </Box>
      </CardContent>

      <ActionButton to={`/packages/${pack.name}`} color="primary">
        View
      </ActionButton>
    </Card>
  );
};
