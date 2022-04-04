import * as React from 'react'
import Layout from '../components/layout'
import { TableContainer, Table, TableBody, TableCell, TableRow, Box, Grid, Button } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <Box sx={{textAlign: 'center'}}>
        <Box>
          <h2>Service</h2>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <StaticImage
                alt="テックジム秋葉原校"
                src="../images/techgym_logo.png"
                width={300}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <h3>テックジム秋葉原校</h3>
              <Box component="p">
                「基礎知識不要」で気軽に通える
              </Box>
              <Box component="p">
                定額制プログラミング教室
              </Box>
              <Button variant="outlined" href="https://techgym.jp/tokyo/akihabara/">テックジム秋葉原校</Button>
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
                  <TableCell><a href="mailto:info@maaji.co.jp">info@maaji.co.jp</a></TableCell>
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
