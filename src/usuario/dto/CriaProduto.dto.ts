import { ArrayMinSize, ArrayNotEmpty, IsNotEmpty, IsPositive, IsString, IsUUID, MaxLength, Min } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./Imagem.dto";
import { Type } from "class-transformer";

export class CriaProdutoDTO {

    @IsUUID(undefined, { message: 'ID de usuário inválido' })
    usuarioId: string;
    
    @IsString()
    @IsNotEmpty({ message: `O nome do produto não pode ser vazio` })
    nome: string;

    @IsPositive({ message: `O valor deve ser positivo maior que zero`})
    valor: number;
    
    @Min(0, {message: `A quantidade deve ser igual ou maior que zero`})
    quantidadeDisponivel: number;

    @IsNotEmpty({message: `A decrição não pode ser vazia`})
    @MaxLength(1000, {message: `Até 1000 caracteres`})
    descricao: string;

    @ArrayNotEmpty()
    @ArrayMinSize(3)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsNotEmpty({message: `A decrição não pode ser vazia`})
    categoria: string;

}