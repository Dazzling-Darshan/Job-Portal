import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      
      <Table className="min-w-full text-sm text-gray-700">
        
        <TableCaption className="text-gray-500 py-3">
          A list of your applied jobs
        </TableCaption>

        <TableHeader className="bg-gray-50">
          <TableRow className="border-b">
            <TableHead className="font-semibold text-gray-600">Date</TableHead>
            <TableHead className="font-semibold text-gray-600">Job Role</TableHead>
            <TableHead className="font-semibold text-gray-600">Company</TableHead>
            <TableHead className="text-right font-semibold text-gray-600">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            [1, 2].map((item, index) => (
              <TableRow 
                key={index} 
                className="hover:bg-gray-50 transition border-b last:border-none"
              >
                <TableCell className="py-3 text-gray-600">
                  17-07-2024
                </TableCell>

                <TableCell className="py-3 font-medium text-gray-800">
                  Frontend Developer
                </TableCell>

                <TableCell className="py-3 text-gray-600">
                  Google
                </TableCell>

                <TableCell className="text-right py-3">
                  <Badge className="bg-green-50 text-green-700 hover:bg-green-100 px-3 py-1 rounded-full">
                    Selected
                  </Badge>
                </TableCell>

              </TableRow>
            ))
          }
        </TableBody>

      </Table>
    </div>
  )
}

export default AppliedJobTable