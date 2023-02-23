import * as React from 'react'
import Layout from '../components/layout'
import { TableContainer, Table, TableBody, TableCell, TableRow, Box, Grid, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <Box sx={{textAlign: 'center'}}>
        <h2>Services</h2>
        <Box>
          <List>
            <ListItem><AssignmentTurnedInIcon />Rails, Laravelを使ったWebサービスの受託開発</ListItem>
            <ListItem><AssignmentTurnedInIcon />タスク管理・スクラムなどの開発組織作り</ListItem>
            <ListItem><AssignmentTurnedInIcon />既存プロジェクト・新規事業などの開発支援</ListItem>
            <ListItem><AssignmentTurnedInIcon />SEO・広告運用・LPOなどのWebマーケティング</ListItem>
            <ListItem><AssignmentTurnedInIcon />その他Webに関わるものはなんでもご相談ください</ListItem>
          </List>
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
