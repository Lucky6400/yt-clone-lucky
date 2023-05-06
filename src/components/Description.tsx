import { Box, Typography } from '@mui/material'
import React from 'react'

const Description: React.FC = () => {
    return (
        <Box width="100%" sx={{ backgroundColor: '#4c4c4c' }} padding={"10px"} borderRadius={"10px"} marginY={"20px"}>
            <Typography fontSize={"14px"} color="white" width="100%">
                <strong style={{ marginRight: '5px' }}> 16K views </strong>

                {"   "}
                6 hours ago
            </Typography>

            <Typography fontSize="14px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veniam culpa vel dolor obcaecati repellendus ratione ipsam, vero corrupti cum molestias nulla nisi libero temporibus. Rem amet magni quas, molestiae tempore soluta deleniti praesentium eligendi vitae. Delectus laboriosam laudantium tempore molestiae non id, ipsum rerum! Autem impedit delectus accusamus doloremque unde, nesciunt voluptatibus ullam illum. Molestias nihil deserunt assumenda officia adipisci velit, alias non inventore numquam!
            </Typography>
        </Box>
    )
}

export default Description