import Link from 'next/link';
import React from 'react';

type Props = {
    currentPage?: number; // Текущая страница
    totalPages: number;    // Всего страниц
    href: string;         // Ссылка для пагинации
};

function Pagination({ currentPage = 1, totalPages, href }: Props) {
    const ctyle = 'bg-white/10 border border-white/30 text-white px-4 py-2 hover:bg-blue-600 transition-all duration-300 ease-in-out';
    const Active = 'bg-blue-500 border border-white/30 text-white px-4 py-2 hover:bg-blue-600 transition-all duration-300 ease-in-out';
    const range = 4; // Диапазон отображаемых страниц

    // Функция генерации ссылок на страницы
    const generatePageLinks = () => {
        const pageLinks = [];
        const halfRange = Math.floor(range / 2); // Делим диапазон пополам для отступов

        // Определяем диапазон страниц для показа
        const start = Math.max(1, currentPage - halfRange);
        const end = Math.min(totalPages, currentPage + halfRange);

        // Генерация ссылок на страницы в диапазоне
        for (let i = start; i <= end; i++) {
            pageLinks.push(
                <Link key={i} href={`${href}?page=${i}`} className={`${currentPage === i ? Active : ctyle}`}>
                    {i}
                </Link>
            );
        }

        return pageLinks;
    };

    return (
        <div>
            <div className="flex items-center justify-center gap-1">
                {/* Кнопка "Назад" */}
                {currentPage > 1 && (
                    <Link href={`${href}?page=${currentPage - 1}`} className={ctyle}>Назад</Link>
                )}

                {/* Первая страница и "..." */}
                {currentPage > range - 1 && (
                    <>
                        <Link href={`${href}?page=1`} className={ctyle}>1</Link>
                        <div className={ctyle}>...</div>
                    </>
                )}

                {/* Страницы в диапазоне */}
                {generatePageLinks()}

                {/* "..." и последняя страница */}
                {currentPage < totalPages - range && (
                    <>
                        <div className={ctyle}>...</div>
                        <Link href={`${href}?page=${totalPages > 500 ? 500: totalPages}`} className={ctyle}>{totalPages > 500 ? 500: totalPages}</Link>
                    </>
                )}

                {/* Кнопка "Вперед" */}
                {currentPage < totalPages && (
                    <Link href={`${href}?page=${currentPage + 1}`} className={ctyle}>Вперед</Link>
                )}
            </div>
        </div>
    );
}

export default Pagination;
