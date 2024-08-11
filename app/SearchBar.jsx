import SearchBar from '../app/Search';

export default function Home() {
  const data = [
    { name: 'Əsas Səhifə', link: '/' },
    { name: 'Haqqımızda', link: '/About' },
    { name: 'Məhsullar', link: '/product' },
    { name: 'Xidmətlər və Həllər', link: '/ServicePage' },
    { name: 'Qalereya və Bloq', link: '/Blog' },
    { name: 'Əlaqə', link: '/Contact' },
    {name:'ünvan', link:"/Contact"},
    {name:'Email', link:'/Contact'}
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SearchBar data={data} />
    </div>
  );
}
