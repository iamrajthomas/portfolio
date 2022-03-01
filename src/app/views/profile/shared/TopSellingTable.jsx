import React from 'react'
import {
    Card,
    // Icon,
    // IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    // MenuItem,
    // Select,
    Chip
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import configuration from "../../../config/configuration";

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const TopSellingTable = () => {
    const classes = useStyles()
    
    const projectList = configuration.liveproject;

    return (
        <Card elevation={3} className="pt-5 mb-6 lg-12 md-12 sm-12">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">Projects List</span>
                {/* <Select size="small" defaultValue="all_time" disableUnderline>
                    <MenuItem value="all_time">All Time</MenuItem>
                </Select> */}
            </div>
            <div className="overflow-auto">
                <Table
                    className={clsx(
                        'whitespace-pre min-w-400',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell className="px-6" colSpan={4}>
                                # Name
                            </TableCell>
                            {/* <TableCell className="px-0" colSpan={2}>
                                Name
                            </TableCell> */}
                            <TableCell className="px-0" colSpan={3}>
                                Role
                            </TableCell>
                            <TableCell className="px-0" colSpan={5}>
                                Tech-Stack
                            </TableCell>
                            {/* <TableCell className="px-0" colSpan={1}>
                                Action
                            </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projectList.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    className="px-0 capitalize"
                                    colSpan={4}
                                    align="left"
                                    sx={{ px: 0, textTransform: 'capitalize' }}
                                >
                                    <div className="flex items-center" alignItems="center">
                                        <Avatar 
                                            src={`${process.env.PUBLIC_URL}${product.imgUrl}`}  
                                            // src={product.imgUrl}
                                            //src={`${process.env.PUBLIC_URL}/assets/images/rt/rt-face.jpg`} 
                                            />
                                        <span className='ml-4'>
                                            {product.shorttitle}
                                        </span>
                                    </div>
                                    {/* <div className="flex items-center">
                                        <Avatar 
                                        src={`${process.env.PUBLIC_URL}${product.imgUrl}`}  // src={product.imgUrl} //src={`${process.env.PUBLIC_URL}/assets/images/rt/rt-face.jpg`} 
                                        />
                                    </div> */}
                                </TableCell>
                                {/* <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                    colSpan={2}
                                >
                                    {product.shorttitle}
                                </TableCell> */}
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                    colSpan={3}
                                >
                                    {product.role}
                                </TableCell>

                                <TableCell
                                    className="px-0"
                                    align="left"
                                    colSpan={5}
                                >
                                    
                                    {
                                        product?.techstack?.backEnd?.length > 0 &&
                                        product?.techstack?.backEnd?.map((be, idx) => {
                                            return <Chip 
                                            className="mt-1 mb-1 ml-1" 
                                            key={idx} 
                                            label={be} 
                                            component="a"
                                            clickable 
                                            color="primary" 
                                            variant="outlined" />
                                        })
                                    }
                                    {
                                        product?.techstack?.db?.length > 0 &&
                                        product?.techstack?.db?.map((db, idx) => {
                                            return <Chip 
                                            className="mt-1 mb-1 ml-1" 
                                            key={idx} 
                                            label={db} 
                                            component="a"
                                            clickable 
                                            color="primary" 
                                            variant="outlined" />
                                        })
                                    }
                                </TableCell>
                                {/* <TableCell className="px-0" colSpan={1}>
                                    <IconButton>
                                        <Icon color="primary">edit</Icon>
                                    </IconButton>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}





export default TopSellingTable
