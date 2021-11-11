namespace Serenity.Data
{
    public interface IRowVersionRow : IEntity
    {
        IField RowVersionField { get; }
    }
}
