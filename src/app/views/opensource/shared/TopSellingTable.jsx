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
    MenuItem,
    Select,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

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

    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">Projects List</span>
                <Select size="small" defaultValue="all_time" disableUnderline>
                    <MenuItem value="all_time">All Time</MenuItem>
                </Select>
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
                            <TableCell className="px-6" colSpan={1}>
                                #
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Name
                            </TableCell>
                            <TableCell className="px-0" colSpan={3}>
                                Role
                            </TableCell>
                            <TableCell className="px-0" colSpan={4}>
                                Tech-Stack
                            </TableCell>
                            {/* <TableCell className="px-0" colSpan={1}>
                                Action
                            </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    className="px-0 capitalize"
                                    colSpan={1}
                                    align="left"
                                >
                                    <div className="flex items-center">
                                        <Avatar src={product.imgUrl} />
                                    </div>
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                    colSpan={2}
                                >
                                    {product.name}
                                </TableCell>
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
                                    colSpan={4}
                                >
                                    {product.techstack}
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

const productList = [
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'ICM',
        role: 'Senior Product Engineer',
        techstack: 'Asp.Net MVC, SQL Server, React JS',
        isActive: true
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        name: 'ADGA',
        role: 'Product Engineer',
        techstack: 'Asp.Net Core, SQL Server, React JS',
        isActive: true
    },
    {
        imgUrl: '/assets/images/products/iphone-1.jpg',
        name: 'SigmaFlow',
        role: 'Software Developer',
        techstack: 'Asp.Net MVC, SQL Server, Angular 6/8',
        isActive: true
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'Wise Connect',
        role: 'Software Developer',
        techstack: 'Asp.Net Core, SQL Server, Angular 4',
        isActive: true
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        name: 'Plexosoft',
        role: 'Junior Software Developer',
        techstack: 'Asp.Net Core, SQL Server, Angular 4',
        isActive: true
    },
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'CTS',
        role: 'Junior Software Developer',
        techstack: 'Asp.Net Core, SQL Server, Angular 2',
        isActive: true
    }   
]

export default TopSellingTable
