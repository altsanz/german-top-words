import { Box, Typography } from "@mui/material";
export default function TheWord(props) {
    return (<Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant="h1" component="div" gutterBottom>
            {props.word}
        </Typography>
    </Box>)
}