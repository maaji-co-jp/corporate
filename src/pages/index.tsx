import * as React from 'react'
import Layout from '../components/layout'
import { TableContainer, Table, TableBody, TableCell, TableRow, Box, Grid, Button } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <Box sx={{textAlign: 'center'}}>
        <h2>Services</h2>
        <Box
          sx={{
            padding: '10px 0',
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={4}>
              <StaticImage
                alt="BookLog"
                src="../images/booklog.png"
                width={300}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <h3>BookLog</h3>
              <Box component="p">
                読書中のエモーションを即座にログに残せる
              </Box>
              <Box component="p">
                読書のサポートサービス
              </Box>
              <Button variant="outlined" href="https://www.booklog.xyz">BookLog</Button>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <h2>About</h2>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>会社名</TableCell>
                  <TableCell>株式会社Maaji</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>代表</TableCell>
                  <TableCell>横沢 大輔</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>設立</TableCell>
                  <TableCell>2021年4月27日</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>お問い合わせ</TableCell>
                  <TableCell><a href="mailto:info@mail.maaji.co.jp">info@mail.maaji.co.jp</a></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
