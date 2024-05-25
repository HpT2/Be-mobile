import { ApiProperty } from '@nestjs/swagger';
export class createTransactionDTO{
    @ApiProperty({

        description: 'ID of wallet',
        example : '662373683f8efccec560c2c0'
    })
    readonly wallet_id: String

    @ApiProperty(
        {
            description: 'category of budget ',
            example: 'shopping'
        }
    )
    readonly category: string

    @ApiProperty(
        {
            description: 'amount of money ',
            example: '25000'
        }
    )
    readonly amount: Number

    @ApiProperty(
        {
            example: '15/6/2023 '
        }
    )
    readonly is_pay: boolean

    
}